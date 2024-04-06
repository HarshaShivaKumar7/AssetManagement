import React from "react";
import { Button, Form, Input, DatePicker, InputNumber, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;

export default function CreatePRForm() {
  return (
    <Form layout="vertical">
      <Form.Item
        label="Entity"
        name="entity"
        rules={[{ required: true, message: "Please input the entity!" }]}
      >
        <Input placeholder="Enter entity" />
      </Form.Item>

      <Form.Item
        label="State"
        name="state"
        rules={[{ required: true, message: "Please select the state!" }]}
      >
        <Select placeholder="Select state">
          {/* Populate with state options */}
        </Select>
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: "Please select the city!" }]}
      >
        <Select placeholder="Select city">
          {/* Populate with city options */}
        </Select>
      </Form.Item>

      <Form.Item
        label="Site"
        name="site"
        rules={[{ required: true, message: "Please input the site!" }]}
      >
        <Input placeholder="Enter site" />
      </Form.Item>

      <Form.Item
        label="Requested By"
        name="requestedBy"
        rules={[
          {
            required: true,
            message: "Please input the name of the requester!",
          },
        ]}
      >
        <Input placeholder="Enter requester's name" />
      </Form.Item>

      <Form.Item label="Business Unit" name="businessUnit">
        <Input placeholder="Enter business unit" />
      </Form.Item>

      <Form.Item label="Costcenter" name="costcenter">
        <Input placeholder="Enter cost center" />
      </Form.Item>

      <Form.Item label="Department" name="department">
        <Input placeholder="Enter department" />
      </Form.Item>

      <Form.Item
        label="Email Approvals"
        name="emailApprovals"
        rules={[{ type: "email", message: "The input is not valid E-mail!" }]}
      >
        <Input placeholder="Enter approval emails separated by commas" />
      </Form.Item>

      <Form.Item label="Annexure" name="annexure">
        <Input placeholder="Enter annexure details" />
      </Form.Item>

      <Form.Item label="Additional Documents" name="additionalDocuments">
        <Input type="file" />
      </Form.Item>

      <Form.Item
        label="Requirement"
        name="requirement"
        rules={[{ required: true, message: "Please input the requirement!" }]}
      >
        <TextArea rows={4} placeholder="Describe the requirement" />
      </Form.Item>

      <Form.Item label="Key Benefit" name="keyBenefit">
        <TextArea rows={4} placeholder="Describe the key benefit" />
      </Form.Item>

      <Form.Item label="Remarks" name="remarks">
        <TextArea rows={4} placeholder="Enter any remarks" />
      </Form.Item>

      <Form.Item
        label="Expected Delivery Date"
        name="expectedDeliveryDate"
        rules={[
          {
            required: true,
            message: "Please input the expected delivery date!",
          },
        ]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Currency" name="currency">
        <Select defaultValue="INR" disabled>
          <Option value="INR">Indian Rupee (₹)</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Budget Status"
        name="budgetStatus"
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

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input the price!" }]}
      >
        <InputNumber
          formatter={(value) =>
            `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\₹\s?|(,*)/g, "")}
          style={{ width: "100%" }}
          min={0}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Purchase Request
        </Button>
      </Form.Item>
    </Form>
  );
}
