import React from 'react';

function skillTag({ skill }) {
  return (
    <div className="relative group m-1 inline-block">
      <div
        className={`badge py-4 px-6 font-bold ${skill.text || 'text-white'}`}
        key={skill.name}
        style={{ backgroundColor: skill.color }}
      >
        {skill.name}
      </div>
      {skill.level && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-center text-sm">{skill.level}</p>
        </div>
      )}
    </div>
  );
}

export default skillTag;
