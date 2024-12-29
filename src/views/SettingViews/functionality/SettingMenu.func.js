import { useRouter } from 'next/router';
import { useState } from 'react';
import useSettings from './Setting.func';

const useSettingMenu = () => {
    const router = useRouter();
    const pathname = router.asPath.split('/')[ 2 ];

    const { routes } = useSettings();

    const activeItem = Object.values(routes).filter((item) => item.path === `/${ pathname }`);
    const [ settingItemActiveKey, setSettingItemActiveKey ] = useState(activeItem?.[ 0 ]?.id || '');
    const handleChangeSettingMenu = (id, path) => {
        if (path === '/my-favourites') {
            router.push('/my-favourites');
            return;
        }
        if (!router.isReady) return;
        router.push(`/settings${  path }`);
        setSettingItemActiveKey(id);
    };
    return {
        handleChangeSettingMenu,
        settingItemActiveKey,
    };
};

export default useSettingMenu;
