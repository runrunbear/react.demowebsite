import React from "react";
import { observer } from "mobx-react";

export default observer(({ store }) =>
  <div>
    <h1>
      {store.sites.length}
    </h1>
    <button onClick={store.fetch}>fetch</button>

  </div>
);