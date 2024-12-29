import graphqlQueries from 'graphql/queries';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import { useCustomQuery } from 'hooks/customGqlHook';
import * as Yup from 'yup';

const useYoutubeClaimSupportHook = () => {
    const { data, loading } = useCustomQuery({
        query: graphqlQueries.contentStackQueries.FIND_CONTENT_DATA,
        variables: {
            contentType: 'youtube_claim_support',
            environment: 'development',
            query: null,
            refs: [ 'modular_blocks.n_up.reference' ],
        },
    });

    const claimSupportData = data?.findContent?.content?.entries[ 0 ];

    const { isMobile } = useDeviceTypeHook();

    const fieldTypes = [
        {
            name: 'youtube_channel_id',
            placeholdertext: 'Youtube channel Id*',
            type: 'text',
            id: 0,
            rowwidth: 6,
            disabled: false,
            initialvalue: '',
            textFieldType: isMobile ? 'darkTextField' : '',
            className: 'darkTextField2',
        },
        {
            name: 'youtube_video_uri',
            type: 'text',
            placeholdertext: 'Youtube vide ur*',
            id: 1,
            rowwidth: 6,
            disabled: false,
            initialvalue: '',
            textFieldType: isMobile ? 'darkTextField' : '',
            className: 'darkTextField2',
        },
        {
            name: 'notes',
            type: 'text',
            placeholdertext: 'Notes/Claimant information',
            id: 2,
            rowwidth: 12,
            disabled: false,
            initialvalue: '',
            textFieldType: isMobile ? 'darkTextField' : '',
            className: 'darkTextField2',
        },
    ];

    const validation = Yup.object().shape({
        youtube_channel_id: Yup.string().required('youtube channel id is required'),
        youtube_video_uri: Yup.string().required('youtube video uri is required'),
        notes: Yup.string(),
    });

    const handleSubmitSupport = (e) => console.log(e, 'submitted report');

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleSubmitSupport, fieldTypes, {
        validationSchema: validation,
    });

    return {
        fieldTypes,
        handleSubmit,
        formikProps,
        claimSupportData,
        loading,
    };
};

export default useYoutubeClaimSupportHook;
