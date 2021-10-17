import React, { FC } from "react";
import { Annotation, InternationalString } from "@hyperion-framework/types";
import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";
import { Mirador } from "./Mirador";

export interface FigureProps {
  manifestId: string;
  manifestLabel: InternationalString;
  paintedAnnotation: Annotation;
}

const defaultConfig = {
  workspace: {
    showZoomControls: true,
  },
  workspaceControlPanel: {
    enabled: false,
  },
  window: {
    allowClose: false,
    allowMaximize: false,
    allowTopMenuButton: true,
    allowWindowSideBar: true,
    defaultSidebarPanelWidth: 320,
    forceDrawAnnotations: false,
    hideWindowTitle: false,
    sideBarOpen: true,
  },
};

export const Figure: FC<FigureProps> = ({
  manifestId,
  manifestLabel,
  paintedAnnotation,
}) => {
  /*
   * todo: build a hook that gets the image from the image server
   */

  return (
    <Dialog.Root modal={true}>
      <StyledTrigger>
        <figure>
          <img
            src={`${paintedAnnotation.body[0].service[0].id}/full/!300,300/0/default.jpg`}
          />
          <figcaption>{manifestLabel.none[0]}</figcaption>
          <span>Expand in Viewer</span>
        </figure>
      </StyledTrigger>
      <StyledContent>
        <Dialog.Close>Close Viewer</Dialog.Close>
        <Mirador
          config={{
            windows: [
              {
                manifestId: manifestId,
              },
            ],
            ...defaultConfig,
          }}
          plugins={[]}
        />
      </StyledContent>
    </Dialog.Root>
  );
};

const StyledTrigger = styled(Dialog.Trigger, {
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",

  figure: {
    margin: "0",
  },

  figcaption: {
    display: "flex-inline",
  },
});

const StyledContent = styled(Dialog.Content, {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  backgroundColor: "white",

  "> button": {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "1rem",
    cursor: "pointer",

    "&:hover, &:focus": {
      backgroundColor: "blue",
    },
  },

  "> [id^='yith-']": {
    position: "relative",
    flexGrow: "1",
  },
});
