import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-verify-email-code.ftl" });

const meta = {
    title: "login/login-verify-email-code.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const InvalidCode: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                url: {
                    loginAction: "/mock-login-action"
                },
                messagesPerField: {
                    existsError: (field: string) => field === "email_code",
                    get: () => "Invalid code"
                }
            }}
        />
    )
};

export const AppInitiated: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                isAppInitiatedAction: true
            }}
        />
    )
};
