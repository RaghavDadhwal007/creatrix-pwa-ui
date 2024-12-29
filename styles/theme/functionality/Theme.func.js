import config from 'config';
import graphqlQueries from 'graphql/queries';
import { useCustomQuery } from 'hooks/customGqlHook';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import appSettingActions from 'redux/actions/appSettings.actions';

const useThemeHook = () => {
    const reduxDispatch = useDispatch();
    const getCMSThemeData = () => {
        const {
            data, loading,
        } = useCustomQuery({
            query: graphqlQueries.contentStackQueries.FIND_CONTENT_DATA,
            variables: {
                environment: config.environment,
                contentType: 'app_configuration',
                query: null,
                refs: [],
            },
        });
        const entries = data?.findContent?.content?.entries?.[ 0 ] || [];
        /// cms data //
        useEffect(() => {
            reduxDispatch(appSettingActions.setCMSData(entries));
        }, [ entries ]);
        //  cms fonts //
        const fonts = entries && entries?.font_stack?.map((font) => {
            const obj  = {
                fontName: font?.font_entry?.font_name || '',
                fontFamilyStack: font?.font_entry?.font_family_stack || '',
                fontFilePrimary: font?.font_entry?.font_file_primary || '',
                webFonts: font?.font_entry.web_font?.map((fontFile) => ({
                    fontTitle: fontFile?.file?.filename,
                    fontFileUrl: fontFile?.file?.url,
                    id: fontFile?._metadata?.uid,
                })) || [],
            };
            return obj;
        });
        // creates html link elements of font  //
        const loadFonts = fonts?.map((font) => font?.webFonts?.map((fontFile) => <link key={fontFile?.uid} rel="stylesheet" href={fontFile?.fontFileUrl} />));

        return {
            loadFonts,
            cmsFonts: fonts,
            cmsAppColors: entries?.app_color,
            cmsThemeDataLoading: loading,
        };
    };

    return { getCMSThemeData };
};

export default useThemeHook;
