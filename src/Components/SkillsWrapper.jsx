"use client";
import { Scrollbar } from "smooth-scrollbar-react";

export default function SkillsWrapper({ children }) {
  return (
    <Scrollbar
      className="hide-scrollbar"
      plugins={{ overscroll: { effect: "bounce" } }}
      damping={0.05}
      thumbMaxSize={20}
      renderByPixels={true}
      alwaysShowTracks={false}
      continuousScrolling={true}
    >
      {children}
    </Scrollbar>
  );
}
