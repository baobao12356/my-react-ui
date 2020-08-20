// Storybook强大地方就在于各种神奇插件，knob就是个非常好用的插件。

// 使用knob，我们可以在canvas里对组件进行互动，告别只能看设置好的示例。测试人员或者UI都可以借助平台对其进行调校，直到做出满意的组件。

// 我们使用CSF制作第一个knobstory:


import React from "react";
import Button, {
  APPEARANCES,
  AppearancesTypes,
  SIZES,
  SizesTypes,
  ButtonProps
} from "./index";
import {
  withKnobs,
  text,
  boolean,
  select,
} from "@storybook/addon-knobs";

export default {
  title: "组件/Button",
  component: Button,
  decorators: [withKnobs],
};

export const knobsBtn = () => (
    <Button
      size={select<SizesTypes>("size", SIZES, SIZES.medium)}
      href={text("hrefText", "")}
      isLink={boolean("isLink", false)}
      loadingText={text("loadingTEXT", "I AM LOADING")}
      isLoading={boolean("isLoading", false)}
      disabled={boolean("disabled", false)}
      appearance={select<AppearancesTypes>(
        "APPEARANCES",
        APPEARANCES,
        APPEARANCES.primary
      )}
      isUnclickable={boolean("isUnclickable", false)}
    >
      {text("childrenText", "Hello Storybook")}
    </Button>
);

// 打开storybook，canvas里可以进行各种调校即成功。
// 剩下的就是把各种设置做成story展示下即可：
export const buttons = () => (
  <>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary</Button>
    <Button appearance="outline">Outline</Button>
    <Button appearance="primaryOutline">Outline primary</Button>
    <Button appearance="secondaryOutline">Outline secondary</Button>
    <div style={{ background: "grey", display: "inline-block" }}>
      <Button appearance="inversePrimary">Primary inverse</Button>
    </div>
    <div style={{ background: "grey", display: "inline-block" }}>
      <Button appearance="inverseSecondary">Secondary inverse</Button>
    </div>
    <div style={{ background: "grey", display: "inline-block" }}>
      <Button appearance="inverseOutline">Outline inverse</Button>
    </div>
  </>
);

export const sizes = () => (
  <>
    <Button appearance="primary">Default</Button>
    <Button appearance="primary" size="small">
      Small
    </Button>
  </>
);

export const loading = () => (
  <>
    <Button appearance="primary" isLoading>
      Primary
    </Button>
    <Button appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button appearance="tertiary" isLoading>
      Tertiary
    </Button>
    <Button appearance="outline" isLoading>
      Outline
    </Button>
    <Button appearance="outline" isLoading loadingText="Custom...">
      Outline
    </Button>
  </>
);

export const disabled = () => (
  <>
    <Button appearance="primary" disabled>
      Primary
    </Button>
    <Button appearance="secondary" disabled>
      Secondary
    </Button>
    <Button appearance="tertiary" disabled>
      Tertiary
    </Button>
    <Button appearance="outline" disabled>
      Outline
    </Button>
  </>
);

export const link = () => (
  <>
    <Button appearance="primary" isLink href="/">
      Primary
    </Button>
    <Button appearance="secondary" isLink href="/">
      Secondary
    </Button>
    <Button appearance="tertiary" isLink href="/">
      Tertiary
    </Button>
    <Button appearance="outline" isLink href="/">
      Outline
    </Button>
  </>
);