import { useState } from 'react';

function AiInput() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async () => {
    if (!question) return; // প্রশ্ন ফাঁকা থাকলে রিটার্ন করুন
    setLoading(true);
    setAnswer('');

    try {
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setAnswer(data.answer); // সার্ভার থেকে পাওয়া উত্তর সেট করুন
    } catch (error) {
      console.log(error);
      setAnswer('দুঃখিত, কিছু সমস্যা হয়েছে!'); // এরর মেসেজ বাংলায়
    } finally {
      setLoading(false);
    }
  };

  console.log(answer)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-4 text-blue-500">
          বাংলাদেশ AI সহকারী
        </h1>

        <div className="mb-4">
          <label htmlFor="question" className="block text-lg mb-2 text-blue-500">
            আপনার প্রশ্ন লিখুন:
          </label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="প্রশ্ন লিখুন"
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleAskQuestion}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition duration-300"
          disabled={loading}
        >
          {loading ? 'উত্তর অপেক্ষায়...' : 'প্রশ্ন করুন'}
        </button>

        {answer && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <strong className="text-lg text-blue-500">উত্তর:</strong>
            <p className="mt-2 text-gray-800">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiInput;