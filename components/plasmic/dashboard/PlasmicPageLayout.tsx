// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: g8Vrdu2XBmsbfbbvM7Suus
// Component: N444wUyxkQZo

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { RichLayout } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-layout";
import { LoadingBoundary } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_dashboard.module.css"; // plasmic-import: g8Vrdu2XBmsbfbbvM7Suus/projectcss
import sty from "./PlasmicPageLayout.module.css"; // plasmic-import: N444wUyxkQZo/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: sDI9XfT1ho9m/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 59MFSrY3TbHv/icon

createPlasmicElementProxy;

export type PlasmicPageLayout__VariantMembers = {};
export type PlasmicPageLayout__VariantsArgs = {};
type VariantPropType = keyof PlasmicPageLayout__VariantsArgs;
export const PlasmicPageLayout__VariantProps = new Array<VariantPropType>();

export type PlasmicPageLayout__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPageLayout__ArgsType;
export const PlasmicPageLayout__ArgProps = new Array<ArgPropType>("children");

export type PlasmicPageLayout__OverridesType = {
  root?: Flex__<typeof RichLayout>;
  loadingBoundary?: Flex__<typeof LoadingBoundary>;
};

export interface DefaultPageLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPageLayout__RenderFunc(props: {
  variants: PlasmicPageLayout__VariantsArgs;
  args: PlasmicPageLayout__ArgsType;
  overrides: PlasmicPageLayout__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <RichLayout
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      fixSiderbar={false}
      layout={"side"}
      logoElement={
        <Icon2Icon
          className={classNames(projectcss.all, sty.svg__tERy)}
          role={"img"}
        />
      }
      navMenuItems={(() => {
        const __composite = [
          { path: null, name: null },
          { path: null, name: null },
          { path: null, name: null }
        ];
        __composite["0"]["path"] = `/month-overview`;
        __composite["0"]["name"] = "360 Month overview";
        __composite["1"]["path"] = `/business-metrics`;
        __composite["1"]["name"] = "Business metrics";
        __composite["2"]["path"] = `/product-insights`;
        __composite["2"]["name"] = "Product metrics";
        return __composite;
      })()}
      simpleNavTheme={(() => {
        const __composite = { customBgColor: null, scheme: null };
        __composite["customBgColor"] = "#010347";
        __composite["scheme"] = "custom";
        return __composite;
      })()}
      title={"Wayne Enterprises"}
    >
      <LoadingBoundary
        data-plasmic-name={"loadingBoundary"}
        data-plasmic-override={overrides.loadingBoundary}
        className={classNames("__wab_instance", sty.loadingBoundary)}
        loadingState={
          <DataCtxReader__>
            {$ctx => (
              <div className={classNames(projectcss.all, sty.freeBox__wh93Q)}>
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__uyAsF)}
                  role={"img"}
                />
              </div>
            )}
          </DataCtxReader__>
        }
      >
        <DataCtxReader__>
          {$ctx => (
            <div className={classNames(projectcss.all, sty.freeBox__fpMwu)}>
              {renderPlasmicSlot({
                defaultContents: (
                  <section
                    className={classNames(projectcss.all, sty.section__t8Eo)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1___2Lruk
                      )}
                    >
                      {"Untitled page"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__x1X70
                      )}
                    >
                      {
                        "Press the big blue + button to insert components like Tables, Text, Buttons, and Forms.\n\nJoin our Slack Community (icon in bottom left) for help!"
                      }
                    </div>
                  </section>
                ),
                value: args.children
              })}
            </div>
          )}
        </DataCtxReader__>
      </LoadingBoundary>
    </RichLayout>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loadingBoundary"],
  loadingBoundary: ["loadingBoundary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof RichLayout;
  loadingBoundary: typeof LoadingBoundary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageLayout__VariantsArgs;
    args?: PlasmicPageLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPageLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPageLayout__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPageLayout__ArgProps,
          internalVariantPropNames: PlasmicPageLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageLayout";
  } else {
    func.displayName = `PlasmicPageLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicPageLayout = Object.assign(
  // Top-level PlasmicPageLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loadingBoundary: makeNodeComponent("loadingBoundary"),

    // Metadata about props expected for PlasmicPageLayout
    internalVariantProps: PlasmicPageLayout__VariantProps,
    internalArgProps: PlasmicPageLayout__ArgProps
  }
);

export default PlasmicPageLayout;
/* prettier-ignore-end */
