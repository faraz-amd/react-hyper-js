import React, { useState, useEffect } from 'react';

function ApiTest() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1');
  const [method, setMethod] = useState('GET');
  const [headers, setHeaders] = useState([{ key: 'Content-Type', value: 'application/json' }]);
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [requestHistory, setRequestHistory] = useState([]);

  useEffect(() => {
    // Load request history from localStorage
    const saved = localStorage.getItem('apiTestHistory');
    if (saved) {
      try {
        setRequestHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load history:', e);
      }
    }
  }, []);

  const saveToHistory = (request) => {
    const newHistory = [request, ...requestHistory.slice(0, 9)]; // Keep last 10
    setRequestHistory(newHistory);
    localStorage.setItem('apiTestHistory', JSON.stringify(newHistory));
  };

  const updateHeader = (index, field, value) => {
    const newHeaders = [...headers];
    newHeaders[index] = { ...newHeaders[index], [field]: value };
    setHeaders(newHeaders);
  };

  const addHeader = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const removeHeader = (index) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const handleMethodChange = (newMethod) => {
    setMethod(newMethod);
    // Clear body for GET/DELETE methods
    if (newMethod === 'GET' || newMethod === 'DELETE') {
      setBody('');
    }
  };

  const buildHeaders = () => {
    const headerObj = {};
    headers.forEach((header) => {
      if (header.key && header.value) {
        headerObj[header.key] = header.value;
      }
    });
    return headerObj;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const headersObj = buildHeaders();
      const options = {
        method,
        headers: headersObj,
      };

      if ((method === 'POST' || method === 'PUT' || method === 'PATCH') && body) {
        try {
          options.body = JSON.parse(body);
        } catch (e) {
          // If not valid JSON, send as string
          options.body = body;
        }
      }

      const startTime = Date.now();
      const res = await fetch(url, options);
      const endTime = Date.now();
      const duration = endTime - startTime;

      let responseData;
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        responseData = await res.json();
      } else {
        responseData = await res.text();
      }

      const responseHeaders = {};
      res.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      const responseObj = {
        status: res.status,
        statusText: res.statusText,
        headers: responseHeaders,
        data: responseData,
        duration,
        timestamp: new Date().toISOString(),
      };

      setResponse(responseObj);

      // Save to history
      saveToHistory({
        url,
        method,
        timestamp: new Date().toISOString(),
        status: res.status,
      });
    } catch (err) {
      setError({
        message: err.message,
        stack: err.stack,
        timestamp: new Date().toISOString(),
      });
    } finally {
      setLoading(false);
    }
  };

  const loadFromHistory = (historyItem) => {
    setUrl(historyItem.url);
    setMethod(historyItem.method);
  };

  const clearHistory = () => {
    setRequestHistory([]);
    localStorage.removeItem('apiTestHistory');
  };

  const formatJson = (obj) => {
    try {
      return JSON.stringify(obj, null, 2);
    } catch (e) {
      return String(obj);
    }
  };

  const getStatusColor = (status) => {
    if (status >= 200 && status < 300) return 'success';
    if (status >= 300 && status < 400) return 'warning';
    if (status >= 400) return 'error';
    return 'neutral';
  };

  return (
    <div className="api-test-page">
      <div className="container">
        <header className="api-test-header">
          <p className="eyebrow">API Testing</p>
          <h1>Request Playground</h1>
          <p>
            Test API endpoints, inspect responses, and debug requests. Perfect
            for validating automation endpoints and integration testing.
          </p>
        </header>

        <div className="api-test-layout">
          <div className="api-test-main">
            <form className="api-test-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <select
                  className="method-select"
                  value={method}
                  onChange={(e) => handleMethodChange(e.target.value)}
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="PATCH">PATCH</option>
                  <option value="DELETE">DELETE</option>
                </select>
                <input
                  type="url"
                  className="url-input"
                  placeholder="https://api.example.com/endpoint"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading || !url}
                >
                  {loading ? 'Sending...' : 'Send Request'}
                </button>
              </div>

              <div className="form-section">
                <div className="section-header">
                  <h3>Headers</h3>
                  <button
                    type="button"
                    className="btn btn-ghost btn-small"
                    onClick={addHeader}
                  >
                    + Add Header
                  </button>
                </div>
                <div className="headers-list">
                  {headers.map((header, index) => (
                    <div key={index} className="header-row">
                      <input
                        type="text"
                        placeholder="Header name"
                        value={header.key}
                        onChange={(e) =>
                          updateHeader(index, 'key', e.target.value)
                        }
                        className="header-key"
                      />
                      <input
                        type="text"
                        placeholder="Header value"
                        value={header.value}
                        onChange={(e) =>
                          updateHeader(index, 'value', e.target.value)
                        }
                        className="header-value"
                      />
                      <button
                        type="button"
                        className="btn-icon"
                        onClick={() => removeHeader(index)}
                        aria-label="Remove header"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
                <div className="form-section">
                  <div className="section-header">
                    <h3>Request Body</h3>
                    <span className="body-hint">JSON or plain text</span>
                  </div>
                  <textarea
                    className="body-input"
                    rows="8"
                    placeholder='{"key": "value"}'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </div>
              )}

              {error && (
                <div className="response-error">
                  <h4>Error</h4>
                  <p>{error.message}</p>
                  {error.stack && (
                    <details>
                      <summary>Stack trace</summary>
                      <pre>{error.stack}</pre>
                    </details>
                  )}
                </div>
              )}

              {response && (
                <div className="response-section">
                  <div className="response-header">
                    <div className="response-status">
                      <span
                        className={`status-badge ${getStatusColor(
                          response.status
                        )}`}
                      >
                        {response.status} {response.statusText}
                      </span>
                      <span className="response-meta">
                        {response.duration}ms •{' '}
                        {new Date(response.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>

                  <div className="response-tabs">
                    <div className="tab-content">
                      <div className="tab-section">
                        <h4>Response Body</h4>
                        <pre className="response-body">
                          {formatJson(response.data)}
                        </pre>
                      </div>
                      <div className="tab-section">
                        <h4>Response Headers</h4>
                        <pre className="response-headers">
                          {formatJson(response.headers)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          <aside className="api-test-sidebar">
            <div className="sidebar-section">
              <div className="sidebar-header">
                <h3>Request History</h3>
                {requestHistory.length > 0 && (
                  <button
                    className="btn-link"
                    onClick={clearHistory}
                    type="button"
                  >
                    Clear
                  </button>
                )}
              </div>
              {requestHistory.length === 0 ? (
                <p className="empty-state">No requests yet</p>
              ) : (
                <ul className="history-list">
                  {requestHistory.map((item, index) => (
                    <li key={index} className="history-item">
                      <button
                        className="history-button"
                        onClick={() => loadFromHistory(item)}
                        type="button"
                      >
                        <span className={`method-badge method-${item.method.toLowerCase()}`}>
                          {item.method}
                        </span>
                        <span className="history-url">{item.url}</span>
                        <span className={`status-dot status-${getStatusColor(item.status)}`}></span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="sidebar-section">
              <h3>Quick Examples</h3>
              <div className="examples-list">
                <button
                  className="example-button"
                  onClick={() => {
                    setUrl('https://jsonplaceholder.typicode.com/posts/1');
                    setMethod('GET');
                    setBody('');
                  }}
                  type="button"
                >
                  JSONPlaceholder - Get Post
                </button>
                <button
                  className="example-button"
                  onClick={() => {
                    setUrl('https://jsonplaceholder.typicode.com/posts');
                    setMethod('POST');
                    setBody('{\n  "title": "Test",\n  "body": "Content",\n  "userId": 1\n}');
                  }}
                  type="button"
                >
                  JSONPlaceholder - Create Post
                </button>
                <button
                  className="example-button"
                  onClick={() => {
                    setUrl('https://httpbin.org/get');
                    setMethod('GET');
                    setBody('');
                  }}
                  type="button"
                >
                  HTTPBin - Echo GET
                </button>
                <button
                  className="example-button"
                  onClick={() => {
                    setUrl('https://httpbin.org/post');
                    setMethod('POST');
                    setBody('{"test": "data"}');
                  }}
                  type="button"
                >
                  HTTPBin - Echo POST
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ApiTest;

