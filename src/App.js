import FormSubscription from './components/Form/FormSubscription';

function App() {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     price: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     price: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     price: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  const createEmailEntry = (newFormData) => {
    console.log(newFormData);
  };

  return (
    <div>
      <FormSubscription onSubmitFormData={createEmailEntry}/>
    </div>
  );
}

export default App;

      /* <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} /> */
