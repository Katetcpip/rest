
interface Title {
    text: string
}

const ComponentDemo = (props: Title): JSX.Element => {
  return (
    <div className="rounded-2xl w-full bg-amber-50 shadow-lg">
        <p className="text-start text-xl p-4">{props.text}</p>
    </div>
  );
};

export default ComponentDemo;