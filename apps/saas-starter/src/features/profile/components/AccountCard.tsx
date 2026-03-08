"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@b1dx/ui';
import { Check } from 'lucide-react';

export interface AccountCardProps {
    emailVerified?: boolean;
    twoFAEnabled?: boolean;
    lastLogin?: string;
}

export function AccountCard({ emailVerified = true, twoFAEnabled = false, lastLogin }: AccountCardProps) {
    const { t } = useTranslation();

    return (
        <Card className="border-none shadow-sm">
            <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold">{t('profile_settings.account.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{t('profile_settings.account.email_verified')}</span>
                    <span className="flex items-center gap-1 text-emerald-500 font-bold">
                        {emailVerified ? <Check size={14} /> : null} {t(emailVerified ? 'profile_settings.account.verified' : 'profile_settings.account.unverified', { defaultValue: emailVerified ? 'Verified' : 'Unverified' })}
                    </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{t('profile_settings.account.2fa_status')}</span>
                    <span className="text-amber-500 font-bold">{twoFAEnabled ? t('profile_settings.account.2fa_enabled', { defaultValue: 'Enabled' }) : t('profile_settings.account.2fa_disabled', { defaultValue: 'Disabled' })}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{t('profile_settings.account.last_login')}</span>
                    <span className="text-foreground font-medium">{lastLogin ?? t('profile_settings.account.last_login_value', { defaultValue: '2 hours ago' })}</span>
                </div>
            </CardContent>
        </Card>
    );
}

export default AccountCard;
