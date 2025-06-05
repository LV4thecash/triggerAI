const ENDPOINT = 'https://api-d7b62b.stack.tryrelevance.com/latest/agents/hooks/custom-trigger/954966e5a52a-44a7-9901-bd46ae6cbc8b/fb146ff9-4123-461d-805b-d48fcbed9540';

export async function triggerReport(reportName) {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        triggered_by: 'Chrome Extension',
        report_name: reportName || 'Unnamed'
      })
    });
    return res.ok;
  } catch (e) {
    console.error(e);
    return false;
  }
}
