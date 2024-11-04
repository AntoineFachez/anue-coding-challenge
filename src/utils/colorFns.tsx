export const priorityColor = (priority: number, status: string) => {
  if (status === 'completed') {
    return 'gray';
  }

  switch (priority) {
    case 5:
    case 6:
      return 'red'; // Highest priority (pending)
    case 4:
      return 'orange'; // High priority (pending)
    case 3:
      return 'yellow'; // Medium priority (pending)
    case 2:
    case 1:
      return 'green'; // Low priority (pending)
    default:
      return 'lightblue'; // Default color (if priority is not in the expected range)
  }
};
