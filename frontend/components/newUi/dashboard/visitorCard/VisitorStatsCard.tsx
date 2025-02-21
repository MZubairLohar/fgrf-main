import { useState, useEffect } from "react";
import { getVisitorCount } from "../../config/firebaseUtils";

interface VisitorStatsCardProps {
  title: string;
}

const VisitorStatsCard: React.FC<VisitorStatsCardProps> = ({ title }) => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const count = await getVisitorCount();
        setVisitorCount(count);
      } catch (err) {
        console.error("Failed to fetch visitor count:", err);
        setError("Failed to load visitors count.");
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="card bg-white shadow-md p-4 rounded-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>Total Visitors: {visitorCount}</p>
      )}
    </div>
  );
};

export default VisitorStatsCard;
