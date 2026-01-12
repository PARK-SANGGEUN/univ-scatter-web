import { useState } from "react";
import "./App.css";

const imageMap = {
  "포스텍": ["슬라이드1.PNG"],
  "가천대": ["슬라이드2.PNG", "슬라이드3.PNG", "슬라이드4.PNG"],
  "가톨릭대": ["슬라이드5.PNG", "슬라이드6.PNG"]
};

export default function UniversityScatterViewer() {
  const [selectedUniv, setSelectedUniv] = useState("");

  const universities = Object.keys(imageMap);
  const selectedImages = selectedUniv
    ? Array.isArray(imageMap[selectedUniv])
      ? imageMap[selectedUniv]
      : [imageMap[selectedUniv]]
    : [];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">
        모두의 2025 학생부종합전형 입시결과 산포도
      </h1>
      <p className="text-center text-sm font-semibold text-gray-700 mb-6">
        Copyright@All Teachers (feat. 원주여고 김신우)
      </p>

      <select
        className="border p-2 rounded mb-6 w-full md:w-1/2 block mx-auto"
        value={selectedUniv}
        onChange={(e) => setSelectedUniv(e.target.value)}
      >
        <option value="">대학을 선택하세요</option>
        {universities.map((univ) => (
          <option key={univ} value={univ}>
            {univ}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 gap-6">
        {selectedImages.map((img, idx) => (
          <div
            key={idx}
            className="border-4 border-gray-300 rounded-xl shadow-lg overflow-hidden"
          >
            <a href={`/images/${img}`} target="_blank" rel="noopener noreferrer">
              <img
                src={`/images/${img}`}
                alt={`${selectedUniv} 산포도 ${idx + 1}`}
                loading="lazy"
                className="w-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}