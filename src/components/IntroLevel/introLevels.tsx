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
    hint: "please, be aware that this is not an official medical treatment",
  },
  {
    hint: (
      <span>
        be aware that it is <b>strongly recommended to treat strabismus or amblyopia</b> if you have
        it
      </span>
    ),
  },
  {
    hint: "because it might be not possible for you to see the right picture",
  },
  {
    hint: (
      <span>
        and yet again, <b>if you have strabismus or amblyopia</b>, please <b>at least</b> do as many{" "}
        <a
          href="https://www.webmd.com/eye-health/eye-exercises-strabismus"
          rel="noreferrer"
          target="_blank"
        >
          eye muscle exercises
        </a>{" "}
        as you can every day
      </span>
    ),
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
    hint:
      /* prettier-ignore */
      <span>
        you can also try to add this application to the <b>home screen</b>{" "}
        <Typist.Delay ms={700} /> and use it on your phone
      </span>,
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
    hint: (
      <span>
        the <b>main thing</b> is for you to see both colors in bright variant or both in dark{" "}
        <Typist.Delay ms={700} /> you may close one of your eye to understand that
      </span>
    ),
  },
  {
    hint:
      "you need to try to make a bigger distance between the eyes and the screen every time you exercise",
  },
  {
    hint: "now, wear your glasses and make sure there is no light beside the screen one",
  },
];

export default introLevels;
