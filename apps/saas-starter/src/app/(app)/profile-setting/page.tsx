"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import { TabsRoot as Tabs, TabsList, TabsTrigger } from '@b1dx/ui';
import { ProfileCard, AccountCard, ProfileTabs } from '@/features/profile/components';

export default function ProfileSettingPage() {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(() => (i18n?.language ? i18n.language.split('-')[0] : 'en'));

    const [emailNotif, setEmailNotif] = useState(true);
    const [pushNotif, setPushNotif] = useState(false);
    const [smsNotif, setSmsNotif] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            toast.success('Profile updated successfully');
        }, 1000);
    };

    return (
        <div className="space-y-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground tracking-tight">{t('profile_settings.title')}</h1>
                <p className="text-muted-foreground mt-2">{t('profile_settings.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 space-y-6">
                    <ProfileCard
                        name="Alex Rivera"
                        role="Warehouse Lead"
                        avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces"
                        email="alex.rivera@oms-admin.com"
                        phone="+1 (555) 012-3456"
                        location="Main Warehouse, CA"
                    />

                    <AccountCard emailVerified={true} twoFAEnabled={false} lastLogin={t('profile_settings.account.last_login_value', { defaultValue: '2 hours ago' })} />
                </div>

                <ProfileTabs
                    emailNotif={emailNotif}
                    pushNotif={pushNotif}
                    smsNotif={smsNotif}
                    setEmailNotif={setEmailNotif}
                    setPushNotif={setPushNotif}
                    setSmsNotif={setSmsNotif}
                    lang={lang}
                    onChangeLang={(v) => {
                        setLang(v);
                        void i18n.changeLanguage(v);
                        try {
                            localStorage.setItem('i18nextLng', v);
                        } catch (err) {
                            // ignore
                        }
                    }}
                    handleSave={handleSave}
                    isSaving={isSaving}
                />
            </div>
        </div>
    );
}