import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import Input from "@/components/Input";

type FormProps = {};

const Form = ({}: FormProps) => {
  const [open, setOpen] = useState(false);
  const { control, formState } = useForm({
    defaultValues: {
      basepath: "",
      sitename: "",
    },
  });

  return (
    <>
      <div className="flex justify-center mb-4">
        <button className="" onClick={() => setOpen(!open)}>
          Customize {open ? <>⬆️</> : <>⬇️</>}
        </button>
      </div>
      {open && (
        <form className="w-5/6 mx-auto">
          <Controller
            name="sitename"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Sitename"
                hint="Sitename that appears in the webmanifest file"
                className="mb-6"
                {...field}
              />
            )}
          />
          <Controller
            name="basepath"
            control={control}
            render={({ field }) => (
              <Input
                placeholder='Basepath ("/" by default)'
                hint="Add alternate path to the folder where you place the icons (if you can not/want not place it in the root of the 'public' folder)"
                {...field}
              />
            )}
          />
        </form>
      )}
    </>
  );
};

export default Form;
