const handleResponseError = (response: Response) => {
  if (!response.ok) {
    if (response.status === 401) {
      window.location.href = "/connexion";
    }
    throw new Error("Erreur de récupération des données");
  }
};

export const fetchQuestions = async () => {
  const response = await fetch("/data.json");
  handleResponseError(response);
  const data = await response.json();

  return data.questions;
};

export const fetchMapping = async () => {
  const response = await fetch("/data.json");
  handleResponseError(response);
  const data = await response.json();

  return data.mapping;
};

export const fetchColours = async () => {
  const response = await fetch("/data.json");
  handleResponseError(response);
  const data = await response.json();

  return data.colours;
};
