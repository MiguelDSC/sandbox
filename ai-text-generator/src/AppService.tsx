export const getGeneratedText = async (description: string) => {
  const response = await fetch("http://localhost:3800/generate-text", {
    method: "POST",
    body: JSON.stringify({ description: description }),
    headers: {
      "content-type": "application/json",
    },
  });

  try {
    if (!response.ok) throw new Error("response failed");

    const result = await response.text();

    return result;
  } catch (e) {
    throw e;
  }
};
