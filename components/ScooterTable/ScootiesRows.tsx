"use client";
import React from "react";
import { ScooterData } from "./ScooterTable";

interface ScootiesRowsProps {
  data: ScooterData;
  onView: (scooter: ScooterData) => void;
}

const ScootiesRows: React.FC<ScootiesRowsProps> = ({ data, onView }) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString();
  };

  return (
    <tr className="border-b border-border-default hover:bg-table-row-hover transition-colors">
      <td className="px-4 py-3 font-medium">{data.code || "N/A"}</td>
      <td className="px-4 py-3">{data.battery}%</td>
      <td className="px-4 py-3">{data.imei || "N/A"}</td>
      <td className="px-4 py-3">
        {data.longitude !== undefined ? data.longitude.toFixed(4) : "N/A"}
      </td>
      <td className="px-4 py-3">
        {data.latitude !== undefined ? data.latitude.toFixed(4) : "N/A"}
      </td>
      <td className="px-4 py-3">{formatDate(data.createdAt)}</td>
      <td className="px-4 py-3">
        <button
          onClick={() => onView(data)}
          className="px-3 py-1 bg-primary text-white rounded hover:bg-primary-hover"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default ScootiesRows;
