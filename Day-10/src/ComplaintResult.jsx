const complaints = [
  {
    id: "CMP101",
    status: "Open",
    department: "Customer Service",
  },
  {
    id: "CMP102",
    status: "Closed",
    department: "Technical Support",
  },
  {
    id: "CMP103",
    status: "In Progress",
    department: "Billing",
  },
  {
    id: "CMP104",
    status: "Resolved",
    department: "Customer Service",
  },
  {
    id: "CMP105",
    status: "Open",
    department: "Technical Support",
  },
];

const ComplaintResult = ({ id }) => {
  const complaint = complaints.find((c) => c.id === id);

  if (!id) {
    return <p>Enter Complaint ID</p>;
  }

  return (
    <div>
      {complaint ? (
        <>
          <h2>Complaint Found</h2>

          <p>Complaint ID: {complaint.id}</p>
          <p>Status: {complaint.status}</p>
          <p>Department: {complaint.department}</p>
        </>
      ) : (
        <p>Complaint not found</p>
      )}
    </div>
  );
};

export default ComplaintResult;