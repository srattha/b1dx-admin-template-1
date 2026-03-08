"use client";
import React from "react";

type Props = {
    content: React.ReactNode;

};

export default function CustomerInfo({ content }: Props) {
    return (
        <div className="bg-card rounded-2xl p-6 space-y-3 border border-border shadow-sm">
            {content}
        </div>
    );
}
