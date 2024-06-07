import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-4">
          <input
            type="text"
            className="form-controlCategory"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-jelly">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
