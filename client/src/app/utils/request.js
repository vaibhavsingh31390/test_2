export const request = async (uri, type = "GET", options = {}) => {
  try {
    const response = await fetch(uri, {
      method: type,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      body: ["GET", "HEAD"].includes(type.toUpperCase())
        ? null
        : JSON.stringify(options.body),
    });
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};
