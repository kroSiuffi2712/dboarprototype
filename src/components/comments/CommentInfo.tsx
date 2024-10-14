import { IComment } from "../../types/interfaces/comment.interface";

import { Col, Row } from "antd";

const CommentInfo: React.FC<IComment> = ({ id, name, email, body }) => {
  return (
    <>
      <Row>
        <Col span={4}>ID: </Col>
        <Col span={20}>{id}</Col>
      </Row>
      <Row>
        <Col span={4}>Name: </Col>
        <Col span={20}>{name}</Col>
      </Row>
      <Row>
        <Col span={4}>Email: </Col>
        <Col span={20}>{email}</Col>
      </Row>
      <Row>
        <Col span={4}>Body: </Col>
        <Col span={20}>{body}</Col>
      </Row>
    </>
  );
};
export default CommentInfo;
