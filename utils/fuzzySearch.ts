export const fuzzySearch = (query: string, users: { name: string }[]) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  };