/* global chrome */
export async function addHistory(entry) {
  try {
    const data = await getHistory();
    data.push(entry);
    await chrome.storage.local.set({ history: data });
  } catch (e) {
    console.error(e);
  }
}

export function getHistory() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['history'], (result) => {
      resolve(result.history || []);
    });
  });
}
