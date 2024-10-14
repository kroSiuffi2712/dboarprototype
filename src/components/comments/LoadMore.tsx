import { Button } from "antd";
import { LoadMoreProps } from "../../types/interfaces/components/loadMore.interfaces";


const LoadMoreButton: React.FC<LoadMoreProps> = ({ loading, handleClick }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={handleClick} disabled={loading}>
        loading more
      </Button>
    </div>
  );
};
export default LoadMoreButton;
