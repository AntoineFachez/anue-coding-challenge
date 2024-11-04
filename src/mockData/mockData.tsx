import { v4 as uuidv4 } from 'uuid';

const mockTodoListData = [
  {
    id: '69601d06-1e2b-450e-83bd-ebea21139aee',
    orderIndex: 0,
    priority: 3,
    itemName: 'Buy groceries',
    status: 'pending',
    saved: true,
    createdAt: '2024-10-30T10:00:00Z',
  },
  {
    id: 'fe26ed5d-292b-4ccb-b4a6-327b3bbc824e',
    orderIndex: 1,
    priority: 5,
    itemName: 'Finish report',
    status: 'completed',
    saved: true,
    createdAt: '2024-10-29T14:30:00Z',
  },
  {
    id: 'b840cb9b-d25c-408e-bf65-528215bdedff',
    orderIndex: 2,
    priority: 2,
    itemName: 'Book doctor appointment',
    status: 'pending',
    saved: true,
    createdAt: '2024-10-28T09:15:00Z',
  },
  {
    id: '4ef9b265-4501-4c2f-b7a8-481e5a9235f8',
    orderIndex: 3,
    priority: 3,
    itemName: 'Call mom',
    status: 'completed',
    saved: true,
    createdAt: '2024-10-27T18:00:00Z',
  },
  {
    id: 'b2654ef9-b7a8-4c2f-4501-481e5a9235f8',
    orderIndex: 4,
    priority: 4,
    itemName: 'Pay bills',
    status: 'pending',
    saved: true,
    createdAt: '2024-10-26T11:45:00Z',
  },
];

export { mockTodoListData };
