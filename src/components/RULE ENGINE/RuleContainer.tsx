import Rule from './Rule';

const RuleContainer = ({ currentRule }: { currentRule: any }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mt-3 mb-4">📜 Rule Engine</h2>
      {currentRule ? (
        <Rule
          id={currentRule.ruleId}
          description={currentRule.ruleDescription}
          severity={currentRule.status}
          timestamp={currentRule.timestamp}
        />
      ) : (
        <p className="text-white text-sm italic">No rule triggered yet</p>
      )}
    </div>
  );
};

export default RuleContainer;
