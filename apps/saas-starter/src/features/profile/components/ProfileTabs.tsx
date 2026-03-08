"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { TabsRoot as Tabs, TabsList, TabsTrigger } from '@b1dx/ui';
import { GeneralTab } from './GeneralTab';
import { SecurityTab } from './SecurityTab';
import { NotificationsTab } from './NotificationsTab';
import { PreferencesTab } from './PreferencesTab';

export interface ProfileTabsProps {
    emailNotif: boolean;
    pushNotif: boolean;
    smsNotif: boolean;
    setEmailNotif: (v: boolean) => void;
    setPushNotif: (v: boolean) => void;
    setSmsNotif: (v: boolean) => void;
    lang: string;
    onChangeLang: (v: string) => void;
    handleSave: () => void;
    isSaving: boolean;
}

export const ProfileTabs: React.FC<ProfileTabsProps> = ({
    emailNotif,
    pushNotif,
    smsNotif,
    setEmailNotif,
    setPushNotif,
    setSmsNotif,
    lang,
    onChangeLang,
    handleSave,
    isSaving,
}) => {
    const { t } = useTranslation();

    return (
        <div className="lg:col-span-8">
            <Tabs defaultValue="general" className="w-full">
                <TabsList className="w-full justify-start bg-transparent border-b border-slate-200 dark:border-slate-800 rounded-none h-auto p-0 mb-8">
                    <TabsTrigger
                        value="general"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 font-bold text-slate-500"
                    >
                        {t('profile_settings.tabs.general')}
                    </TabsTrigger>
                    <TabsTrigger
                        value="security"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 font-bold text-slate-500"
                    >
                        {t('profile_settings.tabs.security')}
                    </TabsTrigger>
                    <TabsTrigger
                        value="notifications"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 font-bold text-slate-500"
                    >
                        {t('profile_settings.tabs.notifications')}
                    </TabsTrigger>
                    <TabsTrigger
                        value="preferences"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 font-bold text-slate-500"
                    >
                        {t('profile_settings.tabs.preferences')}
                    </TabsTrigger>
                </TabsList>

                <GeneralTab handleSave={handleSave} isSaving={isSaving} />
                <SecurityTab />
                <NotificationsTab
                    emailNotif={emailNotif}
                    pushNotif={pushNotif}
                    smsNotif={smsNotif}
                    setEmailNotif={setEmailNotif}
                    setPushNotif={setPushNotif}
                    setSmsNotif={setSmsNotif}
                />
                <PreferencesTab lang={lang} onChangeLang={onChangeLang} />
            </Tabs>
        </div>
    );
};

export default ProfileTabs;
