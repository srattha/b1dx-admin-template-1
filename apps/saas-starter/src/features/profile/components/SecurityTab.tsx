"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button, TabsContent } from '@b1dx/ui';
import { Lock, Smartphone } from 'lucide-react';

export const SecurityTab: React.FC = () => {
  const { t } = useTranslation();

  return (
    <TabsContent value="security" className="space-y-6 mt-0">
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>{t('profile_settings.security.title')}</CardTitle>
          <CardDescription>{t('profile_settings.security.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('profile_settings.fields.current_password')}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input id="currentPassword" type="password" className="pl-10 h-11 w-full rounded-xl border border-input px-3 py-2" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('profile_settings.fields.new_password')}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input id="newPassword" type="password" className="pl-10 h-11 w-full rounded-xl border border-input px-3 py-2" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('profile_settings.fields.confirm_password')}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input id="confirmPassword" type="password" className="pl-10 h-11 w-full rounded-xl border border-input px-3 py-2" />
              </div>
            </div>
          </div>
          <Button className="font-bold bg-slate-900 text-white">{t('profile_settings.security.update_password')}</Button>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm border-l-4 border-l-amber-500">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Smartphone className="text-amber-500" size={20} />
            <CardTitle>{t('profile_settings.security.2fa_title')}</CardTitle>
          </div>
          <CardDescription>{t('profile_settings.security.2fa_short')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{t('profile_settings.security.2fa_description')}</p>
          <Button variant="outline" className="font-bold border-amber-200 text-amber-700 hover:bg-amber-50">{t('profile_settings.security.enable_2fa')}</Button>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default SecurityTab;
