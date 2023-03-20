// import { useState } from "react";
import { Controller, type Control } from 'react-hook-form';

// import Button from "@/components/Button";
import Input from '@/components/Input';

type FormProps = {
  control: Control<typeof defaultValues>;
};

export const defaultValues = {
  basepath: '',
  sitename: '',
};

const Form = ({ control }: FormProps) => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      {/* <div className="flex justify-center mb-4">
        <Button className="text-xs px-4" onClick={() => setOpen(!open)}>
          Customize <span className="inline-block ml-2">{open ? <>⬆️</> : <>⬇️</>}</span>
        </Button>
      </div> */}
      <form className="w-5/6 mx-auto mb-4">
        <Controller
          name="sitename"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              placeholder="Sitename"
              hint="Sitename that appears in the webmanifest file"
              className="mb-6"
              error={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="basepath"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              placeholder='Basepath ("/" by default)'
              hint="Add alternate path to the folder where you place the icons (if you can not/want not place it in the root of the 'public' folder)"
              error={error?.message}
              {...field}
            />
          )}
        />
      </form>
    </>
  );
};

export default Form;
