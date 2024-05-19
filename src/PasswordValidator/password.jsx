import { useEffect, useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    let calculatedStrength = 0;
    if (password.length>= 6 && password.length <= 32) {
      calculatedStrength += Math.min(6, password.length / 2);
    }
    if (/A-Z/.test(password)) {
      calculatedStrength += 1;
    }
    if (/a-z/.test(password)) {
      calculatedStrength += 1;
    }
    if (/[0-9]/.test(password)) {
      calculatedStrength += 1;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      calculatedStrength += 1;
    }
    setStrength(Math.min(10, calculatedStrength));
  }, [password]);

  const getStrengthLabel = () => {
    if (strength > 8) return "Strong";
    if (strength > 6) return "Moderate";
    if (strength > 3) return "Week";
    return "Very week";
  };


  return (
    <div className="text-yellow-500">
      <div>Password Validator</div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <div className={`h-full ${getProgressColor()}`} style={{width:`${strength*10 }%`}} >
          </div>
        </div>
        <p>Strength of your password (out of 10) is: {strength}/10 ({getStrengthLabel()})</p>
      </div>
      {password}
    </div>
  );
};

export default Password;
