import React from "react";
import Typist from "react-typist";

export type IntroLevel = {
  hint: React.ReactNode;
};

const introLevels: IntroLevel[] = [
  {
    hint: "this application serves as a try to restore binocular vision",
  },
  {
    hint: "in order to start it you need so called anaglyph red-cyan (red-blue) 3D glasses",
  },
  {
    hint: (
      <span>
        it is also recommended to find a very dark place <Typist.Delay ms={700} /> and exercise in
        evenings
      </span>
    ),
  },
  {
    hint: (
      <span>
        you can also try to add this application to the <b>home screen</b> <Typist.Delay ms={700} />{" "}
        and use it on your phone
      </span>
    ),
  },
  {
    hint: "yet it is still recommended to exercise on bigger screens",
  },
  {
    hint: (
      <span>
        app also works fully offline <b>anywhere</b> and <b>anytime</b>
      </span>
    ),
  },
  {
    hint: (
      <span>
        once everything is set and ready you ain&apos;t gonna see everything again{" "}
        <Typist.Delay ms={700} /> unless you don&apos;t want it
      </span>
    ),
  },
  {
    hint: "now, wear your glasses and make sure there is no light beside the screen one",
  },
];

export default introLevels;
