export const getOrCreateSessionId = () => {
  let sessionId = localStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = '_' + Math.random().toString(36).substring(2, 10);
    localStorage.setItem('session_id', sessionId);
  }
  return sessionId;
};