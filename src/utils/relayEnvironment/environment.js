import {
  Store,
  RecordSource,
  Environment,
  Network,
  Observable,
} from "relay-runtime";

const SERVER_BASE_URL = "http://localhost:8080";

const fetchFn = (params, variables) => {
  const response = fetch(`${SERVER_BASE_URL}/query`, {
    method: "POST",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return Observable.from(response.then((data) => data.json()));
};

export function createEnvironment() {
  const network = Network.create(fetchFn);
  const store = new Store(new RecordSource());
  return new Environment({ store, network });
}
