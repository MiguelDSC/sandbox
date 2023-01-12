export const getGeneratedText = async (description: string) => {
  try {
    const response = await fetch("http://localhost:3400/generate-text", {
      method: "POST",
      body: JSON.stringify({ description: description }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      const result = await response.text();
      return result;
    }
    const result = response.statusText;
    // if (!response.ok) console.log(response.statusText);

    return result;
  } catch (e) {
    if (e instanceof Error) return e.message;

    throw e;
  }
};
