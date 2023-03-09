import * as React from "react";
import { createRoot } from "react-dom/client";
import { createInstance, Piral, createStandardApi } from "piral";
import { layout, errors } from "./layout";
import { createPageLayoutsApi } from "piral-page-layouts";
import { setupShell } from "./app";
import { layoutTwo } from "./test";

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = "https://feed.piral.cloud/api/v1/pilet/empty";
// const feedUrl = "https://feed.piral.cloud/api/v1/pilet/adiba_enterprise_portal";

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: [...createStandardApi(), createPageLayoutsApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

setupShell(instance.root);

const root = createRoot(document.querySelector("#app"));

root.render(<Piral instance={instance} />);
