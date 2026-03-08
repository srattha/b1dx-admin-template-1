"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, TabsContent } from '@b1dx/ui';
import { Mail, Bell, Smartphone } from 'lucide-react';

export interface NotificationsTabProps {
    emailNotif: boolean;
    pushNotif: boolean;
    smsNotif: boolean;
    setEmailNotif: (v: boolean) => void;
    setPushNotif: (v: boolean) => void;
    setSmsNotif: (v: boolean) => void;
}

const Switch: React.FC<{ checked: boolean; onCheckedChange: (v: boolean) => void }> = ({ checked, onCheckedChange }) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={
            'relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none ' +
            (checked ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700')
        }
    >
        <span
            className={
                'inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ' +
                (checked ? 'translate-x-5' : 'translate-x-1')
            }
        />
    </button>
);

export const NotificationsTab: React.FC<NotificationsTabProps> = ({ emailNotif, pushNotif, smsNotif, setEmailNotif, setPushNotif, setSmsNotif }) => {
    const { t } = useTranslation();

    return (
        <TabsContent value="notifications" className="space-y-6 mt-0">
            <Card className="border-none shadow-sm">
                <CardHeader>
                    <CardTitle>{t('profile_settings.notifications.title')}</CardTitle>
                    <CardDescription>{t('profile_settings.notifications.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">{t('profile_settings.notifications.email.title')}</p>
                                <p className="text-xs text-muted-foreground">{t('profile_settings.notifications.email.desc')}</p>
                            </div>
                        </div>
                        <Switch checked={emailNotif} onCheckedChange={setEmailNotif} />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                                <Bell size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">{t('profile_settings.notifications.push.title')}</p>
                                <p className="text-xs text-muted-foreground">{t('profile_settings.notifications.push.desc')}</p>
                            </div>
                        </div>
                        <Switch checked={pushNotif} onCheckedChange={setPushNotif} />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                                <Smartphone size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">{t('profile_settings.notifications.sms.title')}</p>
                                <p className="text-xs text-muted-foreground">{t('profile_settings.notifications.sms.desc')}</p>
                            </div>
                        </div>
                        <Switch checked={smsNotif} onCheckedChange={setSmsNotif} />
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    );
};

export default NotificationsTab;
