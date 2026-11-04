export interface CreditCategory {
  title: string;
  description: string;
  items: {
    name: string;
    role: string;
    details: string;
    link?: string;
  }[];
}

export interface LicenseItem {
  name: string;
  version: string;
  license: string;
  author: string;
  purpose: string;
  url?: string;
  licenseText: string;
}

export interface FontAssetCredit {
  name: string;
  creator: string;
  license: string;
  purpose: string;
  notes: string;
  licenseText: string;
}

export const MIT_TEXT = `MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export const APACHE_2_TEXT = `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.
"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.
"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.
"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity.

2. Grant of Copyright License.
Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License.
Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work.

4. Redistribution.
You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:
(a) You must give any other recipients of the Work or Derivative Works a copy of this License; and
(b) You must cause any modified files to carry prominent notices stating that You changed the files; and
(c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work; and
(d) If the Work includes a "NOTICE" text file as part of its distribution, You must include a readable copy of the attribution notices contained within such NOTICE file.

Disclaimer of Warranty.
Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.`;

export const SIL_OFL_TEXT = `SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide development of collaborative font projects, to support the font creation efforts of academic and linguistic communities, and to provide a free and open framework in which fonts may be shared and improved in partnership with others.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components, in Source or Binary forms, may be sold by itself.
2) Original or Modified Versions of the Font Software may be bundled, redistributed and/or sold with any software, provided that each copy contains the above copyright notice and this license.
3) No Modified Version of the Font Software may use the Reserved Font Name(s) unless explicit written permission is granted by the corresponding Copyright Holder.
4) The name(s) of Copyright Holder(s) or the Author(s) of the Font Software shall not be used to promote, endorse or advertise any Modified Version.
5) The Font Software, modified or unmodified, in part or in whole, must be distributed entirely under this license.

TERMINATION
This license becomes null and void if any of the above conditions are not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT.`;

export const BSD_2_TEXT = `BSD 2-Clause License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES.`;

export const APP_CREDITS: CreditCategory[] = [
  {
    title: "Engine & Platform Architecture",
    description: "Core runtime, sandboxing, and execution systems powering playglow.",
    items: [
      {
        name: "playglow Micro-Engine",
        role: "Deterministic 60 FPS PICO-8 Style Runtime",
        details:
          "Isolated sandbox running inside a postMessage-driven iframe cart. Features custom blitters, sprite legends, dynamic color swatches, collision helpers, and screen effects.",
      },
      {
        name: "Cartridge Sandboxing & Security",
        role: "Safe Execution Environment",
        details:
          "Runs untrusted AI-generated and house cartridge code within an origin-sandboxed HTML container without DOM or network access.",
      },
      {
        name: "State Orchestration",
        role: "Session & Transition Engine",
        details:
          "Finite state machine managing create, build, play, and switch stages with seamless audio hum, camera staging, and cart loading.",
      },
    ],
  },
  {
    title: "Generative AI & Agent Pipeline",
    description: "Multi-stage pipeline translating player prompts into complete playable games.",
    items: [
      {
        name: "Google Gemini 2.5 & 3",
        role: "LLM Foundation via @google/genai",
        details:
          "Powers procedural GameDesignCard generation, adaptive hero persona crafting, dynamic gameplay mechanics, and side-panel art descriptions.",
        link: "https://ai.google.dev",
      },
      {
        name: "gamesmith Managed Agent",
        role: "Cartridge Programmer Agent",
        details:
          "Specialized agent architecture that writes executable micro-games under 300 lines of code, passing automated headless validation checks.",
      },
      {
        name: "Skin Compositor & Attract Mode",
        role: "Dynamic Cabinet Graphics Generator",
        details:
          "Generates custom marquee signs, CRT attract loops, and cabinet side decals matched to player hero and color palette vibe.",
      },
    ],
  },
  {
    title: "3D Cabinet & Visual Effects",
    description: "WebGL rendering and authentic CRT display simulation.",
    items: [
      {
        name: "Three.js 3D WebGL Stage",
        role: "Arcade Cabinet Renderer",
        details:
          "Real-time 3D cabinet simulation featuring dynamic orbit cameras, smooth zoom-in on coin insert, marquee emissive glow, and control deck textures.",
        link: "https://threejs.org",
      },
      {
        name: "Custom GLSL CRT Shader",
        role: "Retro Display Simulation",
        details:
          "Custom fragment shader simulating barrel lens distortion, RGB phosphor triad mask, scanlines, cathode blooming, and vignette corners.",
      },
      {
        name: "Sweetie 16 Color Palette",
        role: "Retro Palette System",
        details:
          "Classic 16-color pixel palette plus procedural accent tones adapted for high-contrast visibility on CRT monitors.",
      },
    ],
  },
  {
    title: "Procedural Audio Synthesizer",
    description: "Zero-sample, Web Audio synthesized acoustic environment.",
    items: [
      {
        name: "CRT Flyback Hum & Deflection Coil",
        role: "Procedural Ambient Audio",
        details:
          "Synthesizes authentic 15.75 kHz television flyback transformer capacitor hum, 60 Hz mains hum, and high-voltage static buzz via Web Audio API.",
      },
      {
        name: "Coin Drop & Arcade Beeps",
        role: "Interactive Sound Effects",
        details:
          "Custom frequency sweep oscillators producing mechanical coin chime, cartridge boot arpeggio, and step click feedback.",
      },
    ],
  },
  {
    title: "House Classic Cartridges",
    description: "Built-in reference cartridges showcasing different arcade genres.",
    items: [
      {
        name: "Comet Pop",
        role: "Paddle & Multiball Breakout",
        details: "Dynamic paddle deflections, brick scoring cascade, and speed ramp physics.",
      },
      {
        name: "Neon Dodger",
        role: "High-Speed Hazard Dodger",
        details: "Tight hazard weaving, proximity score multiplier, and hyper-reflex survival.",
      },
      {
        name: "Dungeon Crawler",
        role: "Grid-Based Maze Explorer",
        details: "Collectible keys, locked iron doors, patrolling monsters, and exit stairs.",
      },
      {
        name: "Cyber Runner",
        role: "Endless Pixel Runner",
        details: "Variable-height jump physics, obstacle timing, and scrolling parallax backdrop.",
      },
      {
        name: "Space Shooter",
        role: "Vertical Arcade Shmup",
        details: "Enemy wave patterns, rapid plasma cannons, particle sparks, and boss encounters.",
      },
      {
        name: "Castle Platformer",
        role: "Precision Platformer",
        details: "Wall collision checks, moving hazards, coin collection, and victory flagpole.",
      },
    ],
  },
];

export const FONT_CREDITS: FontAssetCredit[] = [
  {
    name: "Bricolage Grotesque",
    creator: "Mathieu Triay",
    license: "SIL Open Font License 1.1",
    purpose: "Primary display & UI headlines",
    notes:
      "A playful neo-grotesque with expressive optical sizes and exuberant personality.",
    licenseText: SIL_OFL_TEXT,
  },
  {
    name: "JetBrains Mono",
    creator: "JetBrains",
    license: "SIL Open Font License 1.1",
    purpose: "Monospace telemetry, badges, & code metrics",
    notes: "Designed for code readability with crisp tabular numerals and pixel alignment.",
    licenseText: SIL_OFL_TEXT,
  },
  {
    name: "Press Start 2P",
    creator: "Cody 'CodeMan38' Boisclair",
    license: "SIL Open Font License 1.1",
    purpose: "In-game 8-bit text & arcade CRT titles",
    notes: "Authentic bitmap pixel font based on 1980s Namco arcade game character ROMs.",
    licenseText: SIL_OFL_TEXT,
  },
  {
    name: "Arcade Cabinet 3D Asset",
    creator: "playglow Team & Open Asset Contributors",
    license: "Creative Commons Attribution 4.0 / MIT",
    purpose: "3D Cabinet mesh and texture maps",
    notes: "Optimized GLTF/GLB model with emissive marquee and marquee panel UV mappings.",
    licenseText: MIT_TEXT,
  },
];

export const THIRD_PARTY_LICENSES: LicenseItem[] = [
  {
    name: "three",
    version: "0.170.0",
    license: "MIT",
    author: "mrdoob and Three.js authors",
    purpose: "3D WebGL scene, lighting, camera controls, and mesh rendering",
    url: "https://github.com/mrdoob/three.js",
    licenseText: `The MIT License

Copyright © 2010-2025 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`,
  },
  {
    name: "react",
    version: "19.0.0",
    license: "MIT",
    author: "Meta Platforms, Inc. and affiliates",
    purpose: "Declarative UI rendering and reactive application state",
    url: "https://react.dev",
    licenseText: `MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
  },
  {
    name: "react-dom",
    version: "19.0.0",
    license: "MIT",
    author: "Meta Platforms, Inc. and affiliates",
    purpose: "DOM renderer for React UI components",
    url: "https://react.dev",
    licenseText: `MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
  },
  {
    name: "@google/genai",
    version: "1.0.0",
    license: "Apache-2.0",
    author: "Google LLC",
    purpose: "Official TypeScript SDK for Google Gemini Generative AI APIs",
    url: "https://github.com/googleapis/genai-js",
    licenseText: APACHE_2_TEXT,
  },
  {
    name: "xstate",
    version: "5.19.2",
    license: "MIT",
    author: "David Khourshid and Stately contributors",
    purpose: "Actor-based state machines for reliable arcade workflow orchestration",
    url: "https://stately.ai/docs/xstate",
    licenseText: `MIT License

Copyright (c) 2015 David Khourshid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
  },
  {
    name: "@xstate/react",
    version: "5.0.0",
    license: "MIT",
    author: "David Khourshid and Stately contributors",
    purpose: "React hooks and integration bindings for XState machines",
    url: "https://stately.ai",
    licenseText: `MIT License

Copyright (c) 2019 David Khourshid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
  },
  {
    name: "vite",
    version: "6.1.0",
    license: "MIT",
    author: "Yuxi (Evan) You & Vite Contributors",
    purpose: "Next generation frontend tooling and development server",
    url: "https://vitejs.dev",
    licenseText: `MIT License

Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
  },
  {
    name: "esbuild",
    version: "0.25.0",
    license: "MIT",
    author: "Evan Wallace",
    purpose: "High-performance JavaScript bundler and cartridge script packager",
    url: "https://esbuild.github.io",
    licenseText: `MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
  },
  {
    name: "express",
    version: "4.21.2",
    license: "MIT",
    author: "StrongLoop, IBM, and Express contributors",
    purpose: "Backend HTTP server and Gemini API proxy middleware",
    url: "https://expressjs.com",
    licenseText: `(The MIT License)

Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca>
Copyright (c) 2013-2014 Roman Shtylman <shtylman+expressjs@gmail.com>
Copyright (c) 2014-2015 Douglas Christopher Wilson <doug@somethingdoug.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
  },
  {
    name: "idb-keyval",
    version: "6.2.1",
    license: "Apache-2.0",
    author: "Jake Archibald",
    purpose: "Persistent IndexedDB client-side cartridge storage and high-score saving",
    url: "https://github.com/jakearchibald/idb-keyval",
    licenseText: APACHE_2_TEXT,
  },
  {
    name: "lil-gui",
    version: "0.20.0",
    license: "MIT",
    author: "George Michael Brower",
    purpose: "Debug parameter tuning and 3D camera inspector controls",
    url: "https://lil-gui.georgealways.com",
    licenseText: MIT_TEXT,
  },
  {
    name: "ajv",
    version: "8.17.1",
    license: "MIT",
    author: "Evgeny Poberezkin",
    purpose: "Strict JSON Schema validation for GameDesignCard structures",
    url: "https://ajv.js.org",
    licenseText: MIT_TEXT,
  },
  {
    name: "dotenv",
    version: "16.4.7",
    license: "BSD-2-Clause",
    author: "Scott Motte",
    purpose: "Environment variable loading from .env configuration files",
    url: "https://github.com/motdotla/dotenv",
    licenseText: BSD_2_TEXT,
  },
  {
    name: "cors",
    version: "2.8.5",
    license: "MIT",
    author: "Troy Goode",
    purpose: "Cross-Origin Resource Sharing middleware for Express API routes",
    url: "https://github.com/expressjs/cors",
    licenseText: MIT_TEXT,
  },
];
