"use client";

import { ExportExcelButton, AppPageHeader } from "@b1dx/ui";
import { useTranslation } from 'react-i18next';
import { OrderAll } from '@/features/orders';
export default function OrdersPage() {
    const { t } = useTranslation();
    return (
        <div className="space-y-6">
            <AppPageHeader
                title={t('orders.overview')}
                description={t('orders.description')}
                actions={
                    <ExportExcelButton>{t('common.export_excel')}</ExportExcelButton>
                }
            />
            <OrderAll />
        </div>
    );
}
