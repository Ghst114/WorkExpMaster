
    await waitFor(() => {
        expect(screen.getByText("Proce: 10.5")).toBeInTheDocument();
      });
  });