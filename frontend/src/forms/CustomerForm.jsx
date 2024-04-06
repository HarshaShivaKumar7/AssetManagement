import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  message,
  InputNumber,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const CreatePRForm = ({ isUpdateForm = false }) => {
  const onFinish = (values) => {
    // You will need to handle form submission to your backend or state management here.
    console.log("Received values of form: ", values);
    message.success("Purchase Request submitted successfully.");
  };

  return (
    <Form
      {...formItemLayout}
      name="create-pr-form"
      onFinish={onFinish}
      initialValues={{ currency: "INR" }}
    >
      {/* Entity Field */}
      <Form.Item
        name="entity"
        label="Entity"
        rules={[{ required: true, message: "Please input the entity!" }]}
      >
        <Input placeholder="Enter entity" />
      </Form.Item>

      {/* State Field */}
      <Form.Item
        name="state"
        label="State"
        rules={[{ required: true, message: "Please select the state!" }]}
      >
        <Select placeholder="Select state">
          {/* Replace these with actual states */}
          <Option value="state1">State 1</Option>
          <Option value="state2">State 2</Option>
        </Select>
      </Form.Item>

      {/* City Field */}
      <Form.Item
        name="city"
        label="City"
        rules={[{ required: true, message: "Please select the city!" }]}
      >
        <Select placeholder="Select city">
          {/* Replace these with actual cities */}
          <Option value="city1">City 1</Option>
          <Option value="city2">City 2</Option>
        </Select>
      </Form.Item>

      {/* Site Field */}
      <Form.Item
        name="site"
        label="Site"
        rules={[{ required: true, message: "Please input the site!" }]}
      >
        <Input placeholder="Enter site" />
      </Form.Item>

      {/* Requested By Field */}
      <Form.Item
        name="requestedBy"
        label="Requested By"
        rules={[
          {
            required: true,
            message: "Please input the name of the requester!",
          },
        ]}
      >
        <Input placeholder="Enter requester's name" />
      </Form.Item>

      {/* ... other form items for Business Unit, Costcenter, Department, etc. ... */}

      {/* Email Approvals Field */}
      <Form.Item
        name="emailApprovals"
        label="Email Approvals"
        rules={[{ type: "email", message: "The input is not a valid E-mail!" }]}
      >
        <Input placeholder="Enter approval emails separated by commas" />
      </Form.Item>

      {/* Annexure Field */}
      <Form.Item name="annexure" label="Annexure">
        <Input placeholder="Enter annexure details" />
      </Form.Item>

      {/* Additional Documents Field */}
      <Form.Item
        name="additionalDocuments"
        label="Additional Documents"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="additionalDocs" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      {/* Requirement Field */}
      <Form.Item
        name="requirement"
        label="Requirement"
        rules={[{ required: true, message: "Please input the requirement!" }]}
      >
        <TextArea rows={4} placeholder="Describe the requirement" />
      </Form.Item>

      {/* ... other form items for Key Benefit, Remarks, etc. ... */}

      {/* Expected Delivery Date Field */}
      <Form.Item
        name="expectedDeliveryDate"
        label="Expected Delivery Date"
        rules={[
          {
            required: true,
            message: "Please input the expected delivery date!",
          },
        ]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      {/* Currency Field */}
      <Form.Item name="currency" label="Currency">
        <Select>
          <Option value="INR">Indian Rupee (₹)</Option>
          {/* Add more currencies if needed */}
        </Select>
      </Form.Item>

      {/* Budget Status Field */}
      <Form.Item
        name="budgetStatus"
        label="Budget Status"
        rules={[
          { required: true, message: "Please select the budget status!" },
        ]}
      >
        <Select placeholder="Select budget status">
          <Option value="approved">Approved</Option>
          <Option value="pending">Pending</Option>
          <Option value="rejected">Rejected</Option>
        </Select>
      </Form.Item>

      {/* Submit Button */}
      <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          {isUpdateForm ? "Update Purchase Request" : "Submit Purchase Request"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomerForm;
