export const folderData = {
  id: 1,
  isFolder: false,
  name: 'Folder 1',
  items: [
    {
      id: 4,
      name: 'File 3',
      isFolder: false,
      items: [],
    },
    {
      id: 2,
      isFolder: true,
      name: 'Folder 2',
      items: [
        {
          id: 3,
          name: 'File 2',
          isFolder: false,
          items: [],
        },
        {
          id: 4,
          isFolder: true,
          name: 'Folder 3',
          items: [
            {
              id: 4,
              name: 'File 3',
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
  ],
};
