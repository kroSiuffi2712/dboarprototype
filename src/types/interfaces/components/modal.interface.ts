import { IComment } from "../comment.interface";

export interface ICustomModalProps {
    isModalOpen: boolean;
    showModal: () => void;
    handleCancel: () => void;
    ContentComponent: React.FC<IComment>;
    Contentprops:IComment
  }