import React, { useState, useEffect } from 'react';

import api from '../apis/api';

const Lesson = () => {
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    api.get('lesson').then((response) => {
      setLesson(response.data);
    });
  }, []);

  const renderLesson = lesson.map((item) => (
    <div className="border-2 space-y-5 border-slate-800 grid pl-4" key={item.id}>
      <div className="pt-1.5">
        <h1 className="font-semibold text-lg">{item.title}</h1>
      </div>
      <div>
        <p>
          {item.description}
        </p>
      </div>
      <div className="place-self-end pb-2 pr-4">
        <button
          type="button"
          className="py-2 w-24 bg-blue-400 w-16 rounded text-white-50 font-normal hover:bg-blue-700 text-white"
        >
          Start
        </button>
      </div>
    </div>
  ));

  return (
    <div className="m-5">
      <h1 className="text-4xl font-semibold mb-5">Categories</h1>
      <div className=" grid grid-cols-3 gap-8">
        {renderLesson}
      </div>
    </div>
  );
};

export default Lesson;
