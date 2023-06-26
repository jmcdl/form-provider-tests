import { useFormContext } from "react-hook-form";

export default function Details() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          {...register("name", {
            required: "A name is required"
          })}
        />
      </div>
      {errors.name && <div>{String(errors.name.message)}</div>}
    </>
  );
}
